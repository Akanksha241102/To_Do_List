document.getElementById('add-btn').addEventListener('click', function () {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✖';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById('task-list').appendChild(li);
  input.value = '';
});
