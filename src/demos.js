import RefreshingQueries from './demos/RefreshingQueries';
import RefreshingFragments from './demos/RefreshingFragments';
import ExternalQuery from './external-query/ExternalQuery';
import FragmentExample from './FragmentExample';
import LazyLoad from './LazyLoadExample';
import QueryLoaderExample from './QueryLoaderExample';
import VariablesExample from './VariablesExample';
import RepoPagination from './demos/RepoPagination';

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
  {
    label: 'Refreshing Queries',
    url: '/queries/refreshing',
    component: RefreshingQueries,
  },
  {
    label: 'Refreshing Fragments',
    url: '/queries/refreshing-fragments',
    component: RefreshingFragments,
  },
  {
    label: 'Pagination',
    url: '/pagination/repo-pagination',
    component: RepoPagination,
  },
];

export default routes;
