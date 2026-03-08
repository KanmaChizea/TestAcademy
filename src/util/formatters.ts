export const formatNumber = (val: number) => {
  return Intl.NumberFormat('en-US').format(val);
};

const createOpacityString = (color: string, hex: string) => {
  return `${color}${hex.length === 1 ? '0' : ''}${hex}`;
};

export const withOpacity = (color: string, opacity: number) => {
  if (opacity < 0 || opacity > 1) return color;
  const hex = (opacity * 255).toString(16).toUpperCase().split('.')[0];
  return createOpacityString(color, hex);
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (date.toDateString() === now.toDateString()) return `Today, ${time}`;
  if (date.toDateString() === yesterday.toDateString())
    return `Yesterday, ${time}`;
  return (
    date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) +
    `, ${time}`
  );
};
