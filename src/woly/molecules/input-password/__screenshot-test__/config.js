module.exports = {
  selector: "[class^='input-password']",
  screenshotElStyle: {
    width: 300,
    height: 150,
  },
  states: [
    'static',
    'hover',
    {
      name: 'focus',
      actions: async ({ el }) => {
        const input = await el.$('input[type="password"]');
        await input.focus();
      },
    },
    {
      name: 'text-filled',
      actions: async ({ el }) => {
        const input = await el.$('input[type="password"]');
        await input.type('qwerty');
      },
    },
    {
      name: 'password-visible',
      actions: async ({ el }) => {
        const toggle = await el.$('button');
        await toggle.click({ force: true });
      },
    },
  ],
};
