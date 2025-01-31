import * as utils from "./utils";

export const handleSubmit = (): void => {
  utils.showInputValue();
  utils.stopFormRefreshing();
};