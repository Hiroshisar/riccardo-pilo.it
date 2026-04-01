function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600/60 backdrop-blur-md">
      <div
        className="mx-auto my-[4.8rem] aspect-square w-[6.4rem] animate-[spin_1.5s_linear_infinite] rounded-full"
        style={{
          background: `
        radial-gradient(farthest-side, var(--color-primary-complement) 94%, transparent)
        top/10px 10px no-repeat,
        conic-gradient(transparent 30%, var(--color-primary))
        `,
          WebkitMask: `
        radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)
        `,
          mask: `
        radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)
        `
        }}
      />
    </div>
  );
}

export default Spinner;
