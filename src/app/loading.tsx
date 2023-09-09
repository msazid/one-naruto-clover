import LoadingSkeleton from '@/components/shared/LoadingSkeleton';

/**
 * Loading component
 *
 * Renders a loading state with LoadingSkeleton components.
 *
 * Returns:
 * - 3 LoadingSkeleton components
 * - Dividers with margin in between each
 *
 * Used to indicate content is loading before data is fetched.
 */
export default function Loading() {
  return (
    <>
      <LoadingSkeleton />
      <div className='mt-3'></div>
      <LoadingSkeleton />
      <div className='mt-3'></div>
      <LoadingSkeleton />
    </>
  );
}
