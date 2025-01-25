import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*');

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No transactions found' });
    }

    return res.status(200).json(data);

  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Unexpected error:', err.message);
      return res.status(500).json({ message: 'Internal Server Error', details: err.message });
    } else {
      console.error('Unexpected error:', err);
      return res.status(500).json({ message: 'Internal Server Error', details: 'Unknown error occurred' });
    }
  }
}
