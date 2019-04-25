const logger = {
  info : (...args) => {
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
    'a.pagination-link, a.pagination-next, a.pagination-previous',
  );
  // logger.info('foo', 'bah', 'baz');
  if (form !== undefined) {
    Array.from(pagiantionLinks).forEach((ele: HTMLAnchorElement) => {
      ele.addEventListener('click', (_event) => {
        event.preventDefault();
        // console.log(form['answer--1'].value);
        form.targeturl.value = ele.href;
        // console.log(form.checkValidity());
        // if (form.checkValidity() === true) {

        form.submit();
        // } else {
          // alert('show modal');
        // }
        // window.location.href = ele.href;
      });
    });
  }
  console.log('hello from F O R M', pagiantionLinks);
});
