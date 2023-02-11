import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import CompetitorsPage from './CompetitorsPage';
import HostingPage from './HostingPage';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  function handlePageChange() {
    const newPage = currentPage + 1;
    pagerRef.current?.setPage(newPage);
    setCurrentPage(newPage);
  }

  return (
    <PagerView
      initialPage={0}
      scrollEnabled={false}
      ref={pagerRef}
      style={{flex: 1}}
    >
      <HostingPage key="1" handleNextPage={handlePageChange} />
      <CompetitorsPage key="2" />
    </PagerView>
  );
}
