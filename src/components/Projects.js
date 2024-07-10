import React from 'react';
import './Projects.css';

const projects = [
    {
      name: 'Online CV',
      description: 'An interactive online CV built with React and hosted on GitHub',
      githubUrl: 'https://github.com/kavmal7/Online-CV'
    },
    {
      name: 'Decision Tree Algorithm',
      description: 'Decision Tree Classifier implemented manually using the ID3 algorithm',
      githubUrl: 'https://github.com/kavmal7/decision-tree'
    },
    {
      name: 'MNIST Pipeline',
      description: 'Data analysis and model creation based on the MNIST dataset',
      githubUrl: 'https://github.com/kavmal7/decision-tree'
    },
    {
        name: 'Manual Gradient Descent',
        description: 'Manual implementation of gradient descent in PyTorch',
        githubUrl: 'https://github.com/kavmal7/grad_descent'
    },
    {
        name: 'Object Localisation and Detection',
        description: 'Doing object localisation and object detection with convolutional neural networks',
        githubUrl: 'https://github.com/kavmal7/object-detection'
    },
    {
        name: 'Sequence Models',
        description: 'Doing various NLP tasks with CBOW, Attention models, and RNNs',
        githubUrl: 'https://github.com/kavmal7/Sequence-models'
    },
    {
        name: 'Lane Detection',
        description: 'Given a video of a car driving, make a model highlighting the lanes',
        githubUrl: 'https://github.com/kavmal7/Lane-detection'
    }
];

const Projects = () => (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong><br />
            {project.description}<br />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
);
  
export default Projects;