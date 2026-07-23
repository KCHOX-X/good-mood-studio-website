const form = document.querySelector('#booking-form');
const date = form.querySelector('input[type="date"]');
date.min = new Date().toISOString().split('T')[0];

document.querySelectorAll('[data-service]').forEach((button) => {
  button.addEventListener('click', () => {
    const choice = form.querySelector(`input[value="${button.dataset.service}"]`);
    choice.checked = true;
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `您好，我想預約 Good Mood Studio！\n\n服務：${data.get('service')}\n稱呼：${data.get('name')}\n聯絡方式：${data.get('contact')}\n希望日期：${data.get('date')}\n偏好時段：${data.get('time')}\n備註：${data.get('note') || '無'}`;
  navigator.clipboard?.writeText(message);
  window.open('https://ig.me/m/good_mood_beautystudio', '_blank', 'noopener,noreferrer');
  const hint = form.querySelector('.form-hint');
  hint.textContent = '預約資訊已複製，Instagram 已開啟；請將內容貼到私訊中送出。';
});
