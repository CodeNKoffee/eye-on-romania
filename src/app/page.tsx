import { redirect } from 'next/navigation';

// Root page that redirects to the global locale
export default function RootPage() {
  redirect('/en');
}
