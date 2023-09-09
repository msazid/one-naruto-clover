import ThemeToggle from '@/components/global/ThemeToggle';

export default function Home() {
  return (
    <div className='flex items-center gap-2'>
      Click the button to change the theme
      <ThemeToggle />
    </div>
  );
}
