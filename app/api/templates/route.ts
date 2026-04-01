import { NextResponse } from 'next/server';
import { verifyToken, getTokenFromCookie } from '@/lib/auth';

const MOCK_TEMPLATES = [
  {
    id: 'mock_1',
    name: 'appointment_confirmation',
    status: 'APPROVED',
    language: 'en_US',
    category: 'APPOINTMENT_UPDATE',
    components: [
      {
        type: 'BODY',
        text: 'Hello {{1}}, your appointment at Suryakiran Hospital is confirmed for {{2}} at {{3}}. Reply STOP to unsubscribe.'
      }
    ],
    variables: ['name', 'date', 'time']
  },
  {
    id: 'mock_2',
    name: 'reminder_followup',
    status: 'APPROVED',
    language: 'hi_IN',
    category: 'REMINDER',
    components: [
      {
        type: 'BODY',
        text: 'नमस्ते {{1}}, कृपया अपनी फॉलो-अप अपॉइंटमेंट {{2}} को याद करें। कृपया 2 दिन पहले पुष्टि करें।'
      }
    ],
    variables: ['name', 'date']
  },
  {
    id: 'mock_3',
    name: 'health_tips',
    status: 'APPROVED',
    language: 'mr_IN',
    category: 'MARKETING',
    components: [
      {
        type: 'BODY',
        text: 'नमस्कार {{1}}, आजची टिप: {{2}}. आरोग्यासाठी नियमित तपासणी करा।'
      }
    ],
    variables: ['name', 'tip']
  },
  {
    id: 'mock_4',
    name: 'vaccination_reminder',
    status: 'APPROVED',
    language: 'en_US',
    category: 'REMINDER',
    components: [
      {
        type: 'BODY',
        text: 'Hello {{1}}, this is a reminder that {{2}} is due for vaccination on {{3}}. Please visit the hospital.'
      }
    ],
    variables: ['childName', 'vaccineName', 'date']
  },
  {
    id: 'mock_5',
    name: 'emergency_alert',
    status: 'APPROVED',
    language: 'en_US',
    category: 'TRANSACTIONAL',
    components: [
      {
        type: 'BODY',
        text: 'URGENT: {{1}}, please contact Suryakiran Hospital immediately at +912249634780. Your test results require attention.'
      }
    ],
    variables: ['patientName']
  }
];

export async function GET() {
  try {
    const token = await getTokenFromCookie();
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    
    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }

    const metaToken = process.env.META_TOKEN;
    const wabaId = process.env.WABA_ID;

    if (metaToken && wabaId) {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v18.0/${wabaId}/message_templates`,
          {
            headers: {
              Authorization: `Bearer ${metaToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const templates = data.data?.filter((t: { status: string }) => t.status === 'APPROVED') || [];
          
          const formattedTemplates = templates.map((t: { id: string; name: string; language: string; category: string; components: { type: string; text?: string }[] }) => ({
            id: t.id,
            name: t.name,
            status: 'APPROVED',
            language: t.language,
            category: t.category,
            components: t.components,
            variables: extractVariables(t.components)
          }));

          return NextResponse.json({ success: true, templates: formattedTemplates });
        }
      } catch (metaError) {
        console.error('Meta API error, using fallback:', metaError);
      }
    }

    return NextResponse.json({ 
      success: true, 
      templates: MOCK_TEMPLATES,
      source: 'mock' 
    });

  } catch (error) {
    console.error('Templates API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}

function extractVariables(components: { type: string; text?: string }[]): string[] {
  const variables: string[] = [];
  
  for (const component of components) {
    if (component.type === 'BODY' && component.text) {
      const matches = component.text.match(/\{\{(\d+)\}\}/g);
      if (matches) {
        variables.push(...matches.map((_, i) => `variable${i + 1}`));
      }
    }
  }
  
  return variables;
}