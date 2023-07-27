import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import hunterianMuseum from '../../images/hunterian_museum.jpg'
import discussion1 from '../../images/experiment/discussion-1.png'
import discussion2 from '../../images/experiment/discussion-2.png'
import discussion3 from '../../images/experiment/discussion-2.png'
import { Link } from 'react-router-dom';
import Card from "./Card"

const ProjectsGrid = () => {

	const data = [
		{ id: 1, title: 'Item 1', details: 'Details for item 1', imageUrl: discussion1 },
		{ id: 2, title: 'Item 2', details: 'Details for item 2', imageUrl: discussion2 },
		{ id: 3, title: 'Item 3', details: 'Details for item 3', imageUrl: discussion3 },
		{ id: 4, title: 'Item 4', details: 'Details for item 4', imageUrl: discussion1}
	  ];

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center bg-white rounded-lg overflow-hidden shadow-md py-3">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Our Journey Begins
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(item => (
          <Link to={`/page${item.id}`} key={item.id}>
            <Card title={item.title} details={item.details} imageUrl={item.imageUrl} />
          </Link>
        ))}
      </div>
    </section>
			
	);
};

export default ProjectsGrid;
