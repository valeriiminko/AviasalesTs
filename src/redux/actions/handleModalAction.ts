export const handleModalAction = (tickets: any[], currentname: string) => {
  return {
    type: currentname,
    tickets,
    currentname,
  };
};
