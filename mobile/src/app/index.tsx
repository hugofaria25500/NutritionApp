import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import SplashScreen from '@/components/splash/SplashScreen';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/init');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return <SplashScreen />;
}
