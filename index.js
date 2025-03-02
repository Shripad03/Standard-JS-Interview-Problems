class TaskScheduler {
    constructor() {
      this.graph = new Map();      // Task dependencies graph
      this.indegree = new Map();   // Track number of dependencies
      this.queue = [];             // Ready tasks
    }
  
    addTask(id) {
      if (!this.graph.has(id)) {
        this.graph.set(id, []);
        this.indegree.set(id, 0);
      }
    }
  
    addDependency(task, dependency) {
      this.graph.get(dependency).push(task);
      this.indegree.set(task, (this.indegree.get(task) || 0) + 1);
    }
  
    scheduleTasks() {
      // Enqueue tasks without dependencies
      for (let [task, count] of this.indegree) {
        if (count === 0) this.queue.push(task);
      }
  
      while (this.queue.length > 0) {
        const task = this.queue.shift();
        console.log(`Running Task ${task}`);
        for (let dependent of this.graph.get(task)) {
          this.indegree.set(dependent, this.indegree.get(dependent) - 1);
          if (this.indegree.get(dependent) === 0) this.queue.push(dependent);
        }
      }
    }
  }
  
  // Usage Example:
  const scheduler = new TaskScheduler();
  scheduler.addTask('A');
  scheduler.addTask('B');
  scheduler.addTask('C');
  scheduler.addDependency('B', 'A');
  scheduler.addDependency('C', 'B');
  scheduler.scheduleTasks();  