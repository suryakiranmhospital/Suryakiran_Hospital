import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, getTokenFromCookie } from '@/lib/auth';

interface CampaignPayload {
  campaignName: string;
  templateId: string;
  templateName: string;
  templateVariables: Record<string, string>;
  imageUrl?: string;
  audience: string;
  language: string;
}

export async function POST(request: NextRequest) {
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

    const body: CampaignPayload = await request.json();
    
    const { campaignName, templateId, templateName, templateVariables, imageUrl, audience, language } = body;

    if (!campaignName || !templateId || !templateName || !audience || !language) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    
    if (!n8nUrl) {
      return NextResponse.json(
        { success: false, error: 'n8n webhook URL not configured' },
        { status: 500 }
      );
    }

    const n8nPayload = {
      campaignName,
      templateId,
      templateName,
      templateVariables: templateVariables || {},
      imageUrl: imageUrl || '',
      audience,
      language,
      source: 'suryakiran-hospital',
      timestamp: new Date().toISOString(),
      triggeredBy: payload.username,
    };

    const n8nResponse = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(n8nPayload),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      return NextResponse.json(
        { success: false, error: 'Failed to trigger n8n workflow', details: errorText },
        { status: n8nResponse.status }
      );
    }

    const n8nResult = await n8nResponse.json().catch(() => null);

    return NextResponse.json({
      success: true,
      message: 'Workflow triggered successfully',
      n8nResponse: n8nResult
    });

  } catch (error) {
    console.error('Trigger workflow error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}