class DotRunnerLoader {
  
  constructor(target) {
    this._target = target;
  }
  
  _template() {
    return `
      <div class="mask l-mask">
        <div class="l-container">
          <div class="block l-block block1"></div>
          <div class="block l-block block2"></div>
          <div class="block l-block block3"></div>
        </div>
      </div>
    `;
  }
  
  init() {
    let container = document.createElement("div");
    container.setAttribute("id", "dotRunnerLoader");
    container.innerHTML = this._template();
    
    this._target.appendChild(container);
  }
  
  finish() {
    let loaderContainer = document.querySelector(
      "#dotRunnerLoader"
    );
    this._target.removeChild(loaderContainer);
  }
  
}