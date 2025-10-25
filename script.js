const content = document.getElementById("content");

const sections = {
  how: `
    <div class="panel">
      <h3>Как это работает?</h3>
      <ol>
        <li>Вы пишите на аккаунт <strong>@userafilon</strong> в Telegram</li>
        <li>Договариваемся (срочно! может быть так, что вам напишет не я, а человек, с которым я собираюсь поделить деньги — он просто покупает у вас NFT и создаёт группу со мной)</li>
        <li>Вы скидываете реквизиты и я жду, пока вы скинете NFT</li>
        <li>После того как вы скидываете мне NFT, я кидаю вам на реквизиты деньжата)) (на скамеров не ведёмся)</li>
      </ol>
    </div>
  `,
  faq: `
    <div class="panel">
      <h3>Часто задаваемые вопросы</h3>
      <p><strong>Вы скамите людей?</strong><br>Ответ: нет! мы имеем много отзывов.</p>
      <p><strong>Какие гарантии, что после того как я кину вам свой NFT, вы меня не заскамите?</strong><br>Ответ: гарантии твёрдые! у нас есть свой проект, где можно писать гневные комментарии и отзывы. Не бойтесь!</p>
    </div>
  `,
  tg: `
    <div class="panel">
      <h3>Мой Telegram аккаунт</h3>
      <p>Связаться можно по ссылке:</p>
      <p><a href="https://t.me/userafilon" target="_blank" style="color:#06b6d4;font-weight:600;">@userafilon</a></p>
      <p>Нажмите, чтобы открыть чат и договориться о продаже NFT. Всегда проверяйте, что пишете именно этому аккаунту!</p>
    </div>
  `
};

function showSection(name) {
  if (!sections[name]) return;
  content.classList.remove("show");
  setTimeout(() => {
    content.innerHTML = sections[name];
    content.classList.add("show");
  }, 300);
}

// при загрузке показать первую вкладку
window.addEventListener("DOMContentLoaded", () => {
  showSection("how");
});
