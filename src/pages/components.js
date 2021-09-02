import React, { useState } from 'react';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Breadcrumbs from '../components/Breadcrumbs';
import TopBar from '../components/TopBar';
import Filter from '../components/Filter';
import cn from 'classnames';

import * as css from '../styles/pages/components.module.css';
import { box, cols, col } from '../styles/box.module.css';

const ComponentsPage = () => {
  const [filters1, setFilters1] = useState();
  const [filters2, setFilters2] = useState();

  return (
    <Layout>
      <TopBar />
      <Heading>This is a heading</Heading>
      <Breadcrumbs
        breadcrumbs={[
          { name: 'Videos Overview', link: '' },
          { name: 'Tracks', link: '' },
          { name: 'The Nature of Code', link: '' }
        ]}
      />
      <div className={cols}>
        <Filter
          title="Filter by Language"
          items={[
            'P5.js',
            'Processing',
            'JavaScript',
            'Java',
            'React',
            'Mechanic',
            'Lisp'
          ]}
          selected={filters1}
          onChange={setFilters1}
          className={col}
        />
        <Filter
          title="Filter by Language"
          items={[
            'P5.js',
            'Processing',
            'JavaScript',
            'Java',
            'React',
            'Mechanic',
            'Lisp'
          ]}
          selected={filters2}
          onChange={setFilters2}
          className={col}
        />
      </div>
      <Heading>Box Test</Heading>
      <div className={cn(box, css.box)}>Box 1</div>
      <div className={cn(box, css.box)}>Box 2</div>
      <div className={cols}>
        <div className={cn(box, col, css.box)}>Box 3</div>
        <div className={cn(box, col, css.box)}>Box 4</div>
      </div>
      <div className={cols}>
        <div className={cn(box, col, css.box)}>Box 5</div>
        <div className={cn(box, col, css.box)}>Box 6</div>
        <div className={cn(box, col, css.box)}>Box 7</div>
      </div>
      <div className={cols}>
        <div className={cn(box, col, css.box)}>Nested 1</div>
        <div className={cn(box, col, css.box)}>Nested 2</div>
      </div>
      <div className={cols}>
        <div className={cn(box, col, css.box)}>Nested 4</div>
        <div className={cn(box, col, css.box)}>Nested 5</div>
        <div className={cn(box, col, css.box)}>Nested 6</div>
      </div>
      <div className={cn(box, css.box)}>Box 8</div>
    </Layout>
  );
};

export default ComponentsPage;