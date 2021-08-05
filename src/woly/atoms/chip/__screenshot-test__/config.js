module.exports = {
  selector: '.chip-st',
  states: [
    'static',
    'hover',
    'focus',
    {
      name: 'icon-focus',
      actions: async ({ el }) => {
        const icon = await el.$('button');
        await icon.focus();
      },
    },
  ],
};
