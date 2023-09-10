import ThemeToggle from '@/components/global/ThemeToggle';

export default function Home() {
  return (
    <div className='flex items-center gap-2'>
      <p>Hola top</p>
      <ThemeToggle />
    </div>
  );
}
