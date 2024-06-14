
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
      this.renderQueue();
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const dequeuedElement = this.items.shift();
      this.renderQueue();
      return dequeuedElement;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    renderQueue() {
      const queueElements = document.querySelector(".queue-elements");
      queueElements.innerHTML = "";
      for (const item of this.items) {
        const element = document.createElement("div");
        element.classList.add("queue-element");
        element.textContent = item;
        queueElements.appendChild(element);
      }
    }
  }
  
  const queue = new Queue();
  
  const enqueueBtn = document.querySelector(".enqueue-btn");
  const dequeueBtn = document.querySelector(".dequeue-btn");
  const valueInput = document.querySelector(".value-input");
  
  enqueueBtn.addEventListener("click", () => {
    const value = valueInput.value.trim();
    if (value !== "") {
      queue.enqueue(value);
      valueInput.value = "";
    }
  });
  
  dequeueBtn.addEventListener("click", () => {
    const dequeuedElement = queue.dequeue();
    if (typeof dequeuedElement === "string") {
      alert(dequeuedElement);
    }
  });