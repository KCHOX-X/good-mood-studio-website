document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelector('.service-options');
  if (options) {
    options.innerHTML = `
      <label><input type="radio" name="service" value="睫毛管理" required><span>睫毛管理</span></label>
      <label><input type="radio" name="service" value="肌膚管理"><span>肌膚管理</span></label>
      <label><input type="radio" name="service" value="耳燭肩頸 SPA"><span>耳燭肩頸 SPA</span></label>`;
  }
  const bookingLink = document.querySelector('.booking-contact a');
  if (bookingLink) bookingLink.href = 'https://ig.me/m/good_mood_beautystudio';
  const submit = document.querySelector('.submit-button');
  if (submit) submit.innerHTML = '複製預約資訊並開啟 IG <span>↗</span>';
  const hint = document.querySelector('.form-hint');
  if (hint) hint.textContent = '預約資訊會自動複製並開啟 Instagram 私訊；貼上後送出即可完成預約。';
});
