import { Component, createSignal } from 'solid-js';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class='-translate-1/2 left-20 top-20 absolute z-10 p-5 rounded-xl bg-zinc-7 shadow-xl text-2xl active:bg-zinc-9 active:shadow-none duration-100'
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      {count()}
    </button>
  );
};

export default Counter;
