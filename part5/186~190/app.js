import { TodoManagerWithStorage } from "./TodoManagerWithStorage";

class TodoApp {
    constructor(todos) {
        this.todoManager = new TodoManagerWithStorage(todos);
        this.todoContainerEl = document.querySelector(".todo-container");
        this.titleEl = document.querySelector(".title h2");
        this.plusBtnEl = document.querySelector(".add-todo button");
        this.renderTodos();
        this.bindEvents();
    }

    renderTodos() {
        this.todoContainerEl.innerHTML = "";
        this.todoManager.getList().forEach((todo, i) => {
            const todoEl = this.createElement(todo, i);
            this.todoContainerEl.appendChild(todoEl);
        });
        this.renderTitle();
    }

    createTodoEl(todo, id) {
        const todoEl = document.createElement("div");
        todoEl.id = `todo-${id}`;
        todoEl.className = "todo";
        todoEl.innerHTML = `
            <input type="checkbox" ${todo.done ? "checked" : ""} />
            <span>${todo.contents}</span>
        `;
        return todoEl;
    }

    renderTitle() {
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();

        if (this.titleEl) {
            this.titleEl.innerHTML = `${month}월 ${date}일 (${this.todoManager.leftTodoCount}개 남았습니다.)`;
        }
    }

    bindEvents() {
        this.plusBtnEl.addEventListener("click", (e) => {
            var textEl = document.querySelector(".add-todo input[type='text']");
            this.todoManager.addTodo(textEl.value);
            textEl.value = "";
            this.renderTodos();
        });
        this.todoContainerEl.addEventListener("click", (e) => {
            if (e.target.nodeName === "INPUT" && e.target.parentElement.className === "todo") {
                const clickedEl = e.target.parentElement,
                    index = clickedEl.id.replace("todo-", "");
                this.todoManager.getList()[index].toggle();
                this.renderTitle();
            }
        });
    }
}
