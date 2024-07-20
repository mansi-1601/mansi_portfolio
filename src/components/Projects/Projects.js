import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'; //global style components
import { projects } from '../../constants/constants';
// const projectsDemo= [{
//         title: 'Project 1',
//         description:'This is a really long description about this project,'
//       },
//       {
//         title: 'Project 2',
//         description:'This is a really long description about this project,'
//       },
//       {
//         title: 'Project 3',
//         description:'This is a really long description about this project,'
// },
// {
//   title: 'Project 3',
//   description:'This is a really long description about this project,'
// }];
const Projects = () => (
  <Section nopaading id='projects'>
    <SectionDivider></SectionDivider>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,source,tags,visit})=>(  //to customize make changes in constants,js and add image in public folder
        <BlogCard key={id}>  
         <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo >{description}</CardInfo>
          <div>  
            <TitleContent>Stack</TitleContent> 
            <TagList>
              {tags.map ((tag ,i) => (
                   <Tag key={i}>{tag}</Tag>
               ))}
            </TagList>
          </div>
          <UtilityList>
             {/* gives link to visit specific code */}
            <ExternalLinks href={visit}>Code</ExternalLinks>  
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;