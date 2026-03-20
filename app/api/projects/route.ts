import { NextResponse } from 'next/server';
import { projects } from '../../../data/projects';

export async function GET() {
  try {
    // Return simplified version for index page
    const simplified = projects.map(p => ({
      slug: p.slug,
      name: p.name,
      category: p.category,
      shortDescription: p.shortDescription,
      imageUrl: p.imageUrl,
      tags: p.tags
    }));
    
    return NextResponse.json(simplified);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}