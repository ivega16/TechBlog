const submitFormBtn = document.querySelector('.new-post-form');
const deleteBtn = document.querySelector('.post-list');

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const contents = document.querySelector('#prost-contents').value.trim();


  if (title && contents) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title , contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

submitFormBtn.addEventListener('submit', newFormHandler);

// conditional statement that applies only if the variable exists; without this you will receive a null error
deleteBtn && deleteBtn.addEventListener('click', delButtonHandler);
