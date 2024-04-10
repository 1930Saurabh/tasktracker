var tasks = [
  { startDate: '2024-03-01', endDate: '2024-03-01', task: 'Task1: Last3feet Website Manaual/Overview Testing.' },
  { startDate: '2024-03-01', endDate: '2024-03-01', task: 'Task2: Crest Meeting with new Digital Marketing Team. ' },
  { startDate: '2024-03-01', endDate: '2024-03-01', task: 'Task3: Crest Otp API integration. (Otp Verification without using API using firebase.) ' },
  { startDate: '2024-03-02', endDate: '2024-03-02', task: 'Task1: Last3feet Website bugs document preparation.' },
  { startDate: '2024-03-02', endDate: '2024-03-02', task: 'Task2: Crest Meeting with new Digital Marketing Team. ' },
  { startDate: '2024-03-03', endDate: '2024-03-03', task: 'Weekend' },
  { startDate: '2024-03-04', endDate: '2024-03-04', task: 'Task1: Namserver Updation of Last3feet. (There was some issue in our server from the service provider side.)' },
  { startDate: '2024-03-04', endDate: '2024-03-04', task: 'Task2: Updation of products creatives on crest.' },
  { startDate: '2024-03-04', endDate: '2024-03-04', task: 'Task3: Preparation of other creatives.' },
  { startDate: '2024-03-05', endDate: '2024-03-05', task: 'Task1: Meeting with RCA Marketing' },
  { startDate: '2024-03-05', endDate: '2024-03-05', task: 'Task2: Crest Otp API integration. (Otp Verification without using API using firebase.)' },
  { startDate: '2024-03-05', endDate: '2024-03-05', task: 'Task3: Merchant Id access and configuration'},
  { startDate: '2024-03-06', endDate: '2024-03-06', task: 'Task1: DC tool updation' },
  { startDate: '2024-03-06', endDate: '2024-03-06', task: 'Task2: Crest conversion API integration using stape.io' },
  { startDate: '2024-03-06', endDate: '2024-03-06', task: 'Task3: Crest Otp API integration. (Otp Verification without using API using firebase.)' },
  { startDate: '2024-03-07', endDate: '2024-03-07', task: 'Task1: Crest Meta conversion API integration using stape.io' },
  { startDate: '2024-03-07', endDate: '2024-03-07', task: 'Task2: Crest Otp API integration. (Otp Verification without using API using firebase.)' },
  { startDate: '2024-03-08', endDate: '2024-03-08', task: 'Task1: WhatsApp ordering API integration with website' },
  { startDate: '2024-03-08', endDate: '2024-03-08', task: 'Task2: During deployment of Crest with Meta conversion API the site was down due to some unknown error, contacted GoDaddy helpcare for this.' },
  { startDate: '2024-03-09', endDate: '2024-03-09', task: 'Task1: WhatsApp ordering API integration with website' },
  { startDate: '2024-03-10', endDate: '2024-03-10', task: 'Weekend' },
  { startDate: '2024-03-11', endDate: '2024-03-11', task: 'Task1: Crest deployment after removal of stape.io API' },
  { startDate: '2024-03-11', endDate: '2024-03-11', task: 'Task2: Crest Campaign discussion' },
  { startDate: '2024-03-11', endDate: '2024-03-11', task: 'Task3: New creatives finalizing for social media' },
  { startDate: '2024-03-12', endDate: '2024-03-12', task: 'Task1: DC Tool updation' },
  { startDate: '2024-03-12', endDate: '2024-03-12', task: 'Task2: Last3feet website updation doc.' },
  { startDate: '2024-03-12', endDate: '2024-03-12', task: 'Task3: Manually conversion API integration started. (usually takes more than a week for verification from meta end)' },
  { startDate: '2024-03-13', endDate: '2024-03-13', task: 'Task1: Manually conversion API integration' },
  { startDate: '2024-03-13', endDate: '2024-03-13', task: 'Task2: Removal of whatsapp ordering system from website. (Rahul sir said to remove)' },
  { startDate: '2024-03-13', endDate: '2024-03-13', task: 'Task3: Activation of payments methods' },
  { startDate: '2024-03-14', endDate: '2024-03-14', task: 'Task1: Manually conversion API integration' },
  { startDate: '2024-03-14', endDate: '2024-03-14', task: 'Task2: Website integration with Sitemaps' },
  { startDate: '2024-03-15', endDate: '2024-03-15', task: 'Task1: Last3feet website source code backp and deployment on our server.' },
  { startDate: '2024-03-15', endDate: '2024-03-15', task: 'Task2: Manually conversion API integration.' },
  { startDate: '2024-03-16', endDate: '2024-03-16', task: 'Weekend' },
  { startDate: '2024-03-17', endDate: '2024-03-17', task: 'Weekend' },
  { startDate: '2024-03-18', endDate: '2024-03-18', task: 'Task1: Manually conversion API integration. (Google & Meta)' },
  { startDate: '2024-03-19', endDate: '2024-03-19', task: 'Task1: Shipping errors debug (Due to pickup address expired the shipping was not working(found this after debugging the whole code)). ' },
  { startDate: '2024-03-19', endDate: '2024-03-19', task: 'Task2: Some errors in PIN code configuration (Debugged) ' },
  { startDate: '2024-03-20', endDate: '2024-03-20', task: 'Task1: Manually conversion API integration completed with verified website. The token generally takes a few hour to generate. Also after this it takes so much time for the configuration. Already informed about this.' },
  { startDate: '2024-03-21', endDate: '2024-03-21', task: 'Task1: Anuj was not present. Done some bulk conversions.' },
  { startDate: '2024-03-21', endDate: '2024-03-21', task: 'Task2: Issue resolution, error data recieved from clients end.' },
  { startDate: '2024-03-22', endDate: '2024-03-22', task: 'Leave.' },
  { startDate: '2024-03-23', endDate: '2024-03-23', task: 'Weekend' },
  { startDate: '2024-03-24', endDate: '2024-03-24', task: 'Weekend' },
  { startDate: '2024-03-25', endDate: '2024-03-25', task: 'Holi' },
  { startDate: '2024-03-26', endDate: '2024-03-26', task: 'Holi' },
  { startDate: '2024-03-27', endDate: '2024-03-27', task: 'Task1: Meetings with RCA Team' },
  { startDate: '2024-03-28', endDate: '2024-03-28', task: 'Task1: Website schema changed (RBAC implementation starts) ' },
  { startDate: '2024-03-29', endDate: '2024-03-29', task: 'Task1: Website schema changed (RBAC implementation)' },
  { startDate: '2024-03-29', endDate: '2024-03-29', task: 'Task2: Budget allocation and discussion for marketing' },
  { startDate: '2024-03-30', endDate: '2024-03-30', task: 'Task1: Website schema changed (RBAC implementation)' },
  { startDate: '2024-03-30', endDate: '2024-03-30', task: 'Task2: Payment integration using razorpay, format changes.' },
  { startDate: '2024-03-31', endDate: '2024-03-31', task: 'Weekend'}
];


document.getElementById('startDatePicker').addEventListener('change', function() {
  var selectedDate = this.value;
  displayTasksForDate(selectedDate);
});

function displayTasksForDate(selectedDate) {
  var taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing tasks

  var tasksToShow = tasks.filter(function(task) {
      return task.startDate === selectedDate || task.endDate === selectedDate;
  });

  if (tasksToShow.length === 0) {
      var noTasksItem = document.createElement('li');
      noTasksItem.textContent = 'No tasks to show';
      taskList.appendChild(noTasksItem);
  } else {
      tasksToShow.forEach(function(task) {
          var taskItem = document.createElement('li');
          taskItem.textContent = task.startDate + ' to ' + task.endDate  + ': \n' + task.task;  
          taskList.appendChild(taskItem);
      });
  }
}
