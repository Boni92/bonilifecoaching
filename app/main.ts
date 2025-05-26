'use client'

const interactive = document.querySelector('.interactive') as HTMLElement;
const container = document.querySelector('.gradient-bg') as HTMLElement;

if (interactive && container) {
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    interactive.style.left = `${x}px`;
    interactive.style.top = `${y}px`;
    interactive.style.transform = `translate(-50%, -50%)`;
  });
} 