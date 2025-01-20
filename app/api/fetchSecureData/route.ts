import { NextResponse } from 'next/server';
import axios from 'axios';
import httpsAgent from '../../../lib/httpsAgent'; // Adjust the import path

export async function GET() {
  try {
    const response = await axios.get('https://localhost:8080/api/secure-data', {
      httpsAgent,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching secure data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch secure data' },
      { status: 500 }
    );
  }
}
