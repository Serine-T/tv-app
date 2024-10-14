export const mokingDelay = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const getImagePath = (path: string) => {
    try {
        return require(`@assets/images/${path}`);
    } catch (error) {
        return '';
    }
};
export const getIconPath = (path: string) => {
    try {
        return require(`@assets/images/${path}`).default;
    } catch (error) {
        return '';
    }
};

export const convertDuration = (durationInSeconds: number | string): string => {
    const totalSeconds = typeof durationInSeconds === 'string' ? parseInt(durationInSeconds, 10) : durationInSeconds;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
};
