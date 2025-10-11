const employees = [
  {
    id: 1,
    firstName: "John",
    email: "john@company.com",
    password: "abcd",
    taskSummary: {
      active: 1,
      newTask: 3,
      completed: 1,
      failed: 1,
      accepted:2
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create wireframes and UI for the main homepage.",
        date: "2025-10-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve the issue where the navbar overlaps content on mobile.",
        date: "2025-10-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback Update",
        description: "Apply requested color changes and spacing fixes from client.",
        date: "2025-10-03",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Emma",
    email: "emma@company.com",
    password: "efgh",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
      accepted:2
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate employee API with frontend dashboard.",
        date: "2025-10-06",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Add setup instructions and deployment guide.",
        date: "2025-10-01",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Login Validation",
        description: "Update error handling for incorrect passwords.",
        date: "2025-10-05",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize Images",
        description: "Compress images for faster page load speed.",
        date: "2025-10-02",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Alex",
    email: "alex@company.com",
    password: "ijkl",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Backup",
        description: "Schedule automatic backups for the production database.",
        date: "2025-10-06",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test Payment Gateway",
        description: "Run sandbox transactions for PayPal integration.",
        date: "2025-10-04",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Patch",
        description: "Apply new security updates to the backend API.",
        date: "2025-10-05",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sara",
    email: "sara@company.com",
    password: "mnop",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Marketing Banner",
        description: "Design and export social media banner for new campaign.",
        date: "2025-10-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Blog Content",
        description: "Write SEO-friendly article on product updates.",
        date: "2025-10-02",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Join the team sync meeting and share progress updates.",
        date: "2025-10-03",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Email Newsletter",
        description: "Design email layout and schedule sendout for October.",
        date: "2025-10-05",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "David",
    email: "david@company.com",
    password: "qrst",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Refactor Components",
        description: "Clean up and modularize dashboard components.",
        date: "2025-10-06",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve flex and overflow issues on the profile page.",
        date: "2025-10-03",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup CI/CD",
        description: "Implement GitHub Actions for automated testing.",
        date: "2025-10-04",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code Review",
        description: "Review pull requests from the UI team.",
        date: "2025-10-05",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
    {
        "id": 1,
        "email": "admin@company.com",
        "password": "root"
    }
]
export const  setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = () =>{
    const employee = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employee,admin}
}