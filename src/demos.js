import ExternalQuery from './external-query/ExternalQuery';
import FragmentExample from './FragmentExample';
import LazyLoad from './LazyLoadExample';
import QueryLoaderExample from './QueryLoaderExample';
import VariablesExample from './VariablesExample';

const routes = [
  {
    label: 'Query Loader',
    url: '/queries/query-loader',
    component: QueryLoaderExample,
  },
  {
    label: 'Lazy Loading Queries',
    url: '/queries/lazy-load',
    component: LazyLoad,
  },
  {
    label: 'External queries',
    url: '/queries/external-queries',
    component: ExternalQuery,
  },
  {
    label: 'Fragments',
    url: '/queries/fragments',
    component: FragmentExample,
  },
  {
    label: 'Variables',
    url: '/queries/variables',
    component: VariablesExample,
  },
];

export default routes;
