import React, { useEffect, useState } from 'react';
import SearchBar from '../sections/gallery/SearchBar';
import FilterButton from '../sections/gallery/FilterButton';
import MediaCard from '../sections/gallery/MediaCard';
import Pagination from '../sections/gallery/Pagination';
import SectionHeader from '../sections/gallery/SectionHeader';

const Gallery = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('galaxy');
  const [activeFilter, setActiveFilter] = useState('All Media');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image,video`);
        const data = await res.json();
        const items = data?.collection?.items || [];

        const parsedItems = items.map((item) => {
          const { data, links } = item;
          return {
            title: data[0]?.title || 'Untitled',
            type: data[0]?.media_type || 'unknown',
            imageUrl:
              data[0]?.media_type === 'image'
                ? links?.[0]?.href
                : 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png',
          };
        });

        setMediaItems(parsedItems);
        setCurrentPage(1);
      } catch (err) {
        console.error('Failed to fetch NASA media:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [searchTerm]);

  const filteredItems = mediaItems.filter((item) => {
    if (activeFilter === 'All Media') return true;
    return item.type === activeFilter.slice(0, -1).toLowerCase();
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="c-space py-20">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-full flex-1">
          <SectionHeader
            title="Multimedia Gallery"
            description="Explore a universe of images, videos, podcasts, and interactive 3D models from Cosmos missions and research."
          />

          <SearchBar onSearch={setSearchTerm} />

          <div className="flex gap-3 py-3 flex-wrap pb-10">
            {["All Media", "Images", "Videos"].map((label) => (
              <div key={label} onClick={() => setActiveFilter(label)}>
                <FilterButton label={label} isActive={activeFilter === label} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <MediaCard key={i} loading />
                ))
              : paginatedItems.map(({ imageUrl, title }, idx) => (
                  <MediaCard key={idx} imageUrl={imageUrl} title={title} />
                ))}
          </div>

          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;