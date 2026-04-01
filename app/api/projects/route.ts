// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { projects } from '@/data/projects';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Validate that projects data exists and is an array
    if (!projects || !Array.isArray(projects)) {
      console.error('❌ Projects data is invalid:', projects);
      return NextResponse.json(
        { error: 'Projects data is not available' },
        { status: 500 }
      );
    }

    // Return projects as JSON
    return NextResponse.json(projects, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('❌ API Route Error - Failed to fetch projects:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch projects', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}