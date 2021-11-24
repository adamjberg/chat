const messages = ["this is first message", "here is a second", "and another\nwith multiple lines"];

function Message(props: { body: string }) {
    const el = Div({
        class: "message"
    });

    el.innerText = props.body;

    return el;
}

function MessageList() {
    const el = Div({
        class: "message-list"
    });

    for (const message of messages) {
        el.appendChild(Message({ body: message }));
    }

    return el;
}

function Div(attributes: { id?: string, class?: string } = {}) {
    const div = document.createElement("div");

    for (const attribute in attributes) {
        div.setAttribute(attribute, attributes[attribute]);
    }

    return div;
}

function Input() {
    return document.createElement("input");
}

function TextBox(props: { onSubmit: (text: string) => void; }) {
    const el = Div({
        class: "textbox"
    });

    const input = Input();

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            props.onSubmit(input.value);
            input.value = "";
        }
    })

    el.appendChild(input);

    return el;
}

const root = document.getElementById("root");

const messageList = MessageList();

function handleSubmit(text: string) {
    const newMessage = Message({ body: text });
    messageList.appendChild(newMessage);
    newMessage.scrollIntoView();
}

const textBox = TextBox({onSubmit: handleSubmit});

root.appendChild(messageList);
root.appendChild(textBox);