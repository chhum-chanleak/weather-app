import { appendChildrenToParent } from "../utility/utils";

export class BadRequestMessage {
  create(): HTMLElement {
    const badRequestMessage = document.createElement("div");
    badRequestMessage.classList.add("bad-request-message");

    const message = document.createElement("p");
    message.classList.add("message");

    appendChildrenToParent(
      badRequestMessage,
      message,
    );

    return badRequestMessage;
  }
}