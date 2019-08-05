const logger = {
  info: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(args);
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  if (process.env.NODE_ENV === 'development') {
    console.info('in dev mode');
  }
  const form: HTMLFormElement = document.querySelector('form#the-form');
  const pagiantionLinks: NodeList = document.querySelectorAll(
    'a.pagination-link, a.pagination-next, a.pagination-previous, button.questions__body-button-toreport > a',
  );
  if (form !== undefined) {
    Array.from(pagiantionLinks).forEach((ele: HTMLAnchorElement) => {
      ele.addEventListener('click', _event => {
        event.preventDefault();
        form.targeturl.value = ele.href;
        form.submit();
      });
    });
  }
  console.log('hello from F O R M', pagiantionLinks);
});
