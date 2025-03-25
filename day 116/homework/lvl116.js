function handleClick(event) {
    console.log(`Element ID: ${this.id}, clicked`);
}

document.getElementById('outer').addEventListener('click', handleClick);
document.getElementById('inner').addEventListener('click', handleClick);
document.getElementById('button').addEventListener('click', handleClick);
