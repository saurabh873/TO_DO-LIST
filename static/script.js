{/* <script>
function updateTodoStatus(todoId, isChecked) {
    xhr = new XMLHttpRequest();
    xhr.open('POST', `/update_status/${todoId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('X-CSRFToken', '{{ csrf_token() }}'); // Include CSRF token if needed
    xhr.onload = function() {
        if (xhr.status === 200) {
            
           label = document.getElementById(`label-${todoId}`);
            if (isChecked) {
                label.textContent = 'COMPLETED';
                label.className = 'label done';
            } else {
                label.textContent = 'NOT COMPLETED';
                label.className = 'label pending';
            }
        } else {
            console.error('Error updating todo status:', xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({ done: isChecked }));
}
</script> */}
