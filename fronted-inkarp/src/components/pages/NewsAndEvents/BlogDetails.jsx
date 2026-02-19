import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BlogsDetails from '../../../data/Blogs/BlogsDetails.jsx';
import BlogDetailsOne from '../../../data/Blogs/BlogDetailsOne.jsx';
import BlogDetailsTwo from '../../../data/Blogs/BlogDetailsTwo.jsx';
import BlogDetailsThree from '../../../data/Blogs/BlogDetailsThree.jsx';
import { Helmet } from 'react-helmet';
import BlogDetailsFour from '../../../data/Blogs/BlogDetailsFour.jsx';

const CardData = [
  ...BlogsDetails,
  ...BlogDetailsOne,
  ...BlogDetailsTwo,
  ...BlogDetailsThree,
  ...BlogDetailsFour
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

    const { slug } = useParams();
    const event = CardData.find(e => e.slug === slug);

  // const event = CardData.find((e) => e.id === parseInt(id, 10));

  

  if (!event) {
    return (
      <div className="text-center p-10 text-red-600 font-[MaxOT]">
        Event not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 px-2 md:px-8 w-full">
      <Helmet>
        <title>{event.metaTitle || `${event.title} - Inkarp Instruments Private Ltd`}</title>
        <meta name="keywords" content={event.metakeywords || 'default'} />
        <meta name="description" content={event.metadescrption || 'default'} />
      </Helmet>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-2/5 right-0 lg:right-5 z-30 bg-white shadow border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center text-lg focus:outline-none"
        aria-label="Back"
        type="button"
      >
        <FaArrowLeft />
      </button>

      {/* Main Blog Image and Title */}
      <div className="flex flex-col items-center mb-8 w-full">
        {event.image && (
          <img
            src={event.image}
            alt={event.altText || event.title}
            className="w-full max-h-[520px] object-cover rounded-xl shadow mb-4 border-2 border-[#fbeaec]"
            loading="lazy"
            decoding="async"
          />
        )}
        <h1 className="text-3xl mb-1 text-center font-[MaxOT] tracking-tight drop-shadow-sm">
          {event.title}
        </h1>
        {/* {event.date && (
          <div className="text-gray-500 text-sm mb-2 font-[Roboto]">
            {new Date(event.date).toDateString()}
          </div>
        )} */}
      </div>

       <div
          className="text-base sm:text-lg space-y-4 px-5 text-gray-700 font-[Roboto]"
          dangerouslySetInnerHTML={{
            __html:
              (event.content || "").replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-bold text-black">$1</strong>'
              ),
          }}
        />

      {/* Blog Sections */}
      <div className="flex flex-col gap-8 w-full">
        {event.sections &&
          event.sections.map((sec, idx) => {
            // IMAGE SECTION
            if (sec.type === 'image') {
              return (
                <div key={`img-${idx}`} className="flex flex-col items-center my-4">
                  <img
                    src={sec.imageUrl}
                    alt={sec.caption || `Blog illustration ${idx + 1}`}
                    className="rounded-lg max-w-full max-h-80 object-contain border border-gray-200 shadow"
                    loading="lazy"
                    decoding="async"
                  />
                  {sec.caption && (
                    <p className="mt-2 text-gray-500 text-center italic text-base font-[Roboto] max-w-lg">
                      {sec.caption}
                    </p>
                  )}
                </div>
              );
            }

            // TABLE SECTION
            if (sec.type === 'table') {
              return (
                <div key={`tbl-${idx}`} className="overflow-x-auto my-4">
                  <table className="min-w-max border-collapse border border-gray-300 mx-auto bg-white shadow rounded-lg">
                    <thead>
                      <tr>
                        {sec.columns &&
                          sec.columns.map((col, i) => (
                            <th
                              key={`col-${i}`}
                              className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-center"
                            >
                              {col}
                            </th>
                          ))}
                      </tr>
                      {sec.subcolumns && (
                        <tr>
                          {sec.subcolumns.map((subcol, i) => (
                            <th
                              key={`subcol-${i}`}
                              className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-center"
                            >
                              {subcol}
                            </th>
                          ))}
                        </tr>
                      )}
                    </thead>
                    <tbody>
                      {sec.rows &&
                        sec.rows.map((row, i) => (
                          <tr key={`row-${i}`}>
                            {row.map((cell, j) => (
                              <td
                                key={`cell-${i}-${j}`}
                                className="border border-gray-300 px-4 py-2 text-center"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {sec.caption && (
                    <div className="text-gray-600 text-sm italic mt-2 mb-2 font-[Roboto] w-full text-center">
                      {sec.caption}
                    </div>
                  )}
                </div>
              );
            }

            // FAQ SECTION (dropdown style inside same page)
            if (sec.type === 'faq' && Array.isArray(sec.content)) {
              return (
                <section
                  key={`faq-${idx}`}
                  className="mb-4 bg-white border-l-4 border-[#BE0010] rounded-xl p-6 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#E63946] mb-3 font-[MaxOT] tracking-tight">
                    {sec.heading || 'FAQs'}
                  </h2>

                  <div className="space-y-3">
                    {sec.content.map((item, i) => {
                      const [open, setOpen] = React.useState(false);

                      return (
                        <div
                          key={`qa-${i}`}
                          className="rounded-lg border border-gray-200"
                        >
                          {/* Question row */}
                          <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition ${open
                                ? "bg-[#F5F5F5] text-[#E63946] font-semibold"
                                : "bg-white hover:bg-[#E63946] hover:text-white"
                              }`}
                          >
                            <h3 className="text-base sm:text-lg font-[MaxOT] tracking-tight">
                              {item.q}
                            </h3>
                            <span className="text-sm">{open ? "▲" : "▼"}</span>
                          </button>

                          {/* Answer row (toggle) */}
                          {open && (
                            <div className="px-4 pb-4">
                              <p className="text-gray-800 leading-relaxed text-base font-[Roboto] whitespace-pre-line">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }


            // STANDALONE SUBHEADING (no heading/content)
            if (sec.subheading && !sec.heading && !sec.content && !sec.type) {
              return (
                <div key={`sub-${idx}`} className="mb-2">
                  <h3 className="text-xl  mb-2 font-[MaxOT] tracking-tight">
                    {sec.subheading}
                  </h3>
                </div>
              );
            }

            // DEFAULT TEXT SECTION (handles heading/subheading/content)
            if (sec.heading || sec.content || sec.subheading) {
              return (
                <div
                  key={`txt-${idx}`}
                  className="mb-4 bg-white border-l-4 border-[#E63946] rounded-xl p-6 shadow-sm"
                >
                  {sec.heading && (
                    <h2 className="text-2xl font-bold text-[#E63946] mb-1 font-[MaxOT] tracking-tight">
                      {sec.heading}
                    </h2>
                  )}

                  {Array.isArray(sec.subheading) ? (
                    sec.subheading.map((sub, i) => (
                      <h3
                        key={`subh-${i}`}
                        className="text-lg  text-[#457b9d] mb-2 font-[MaxOT] tracking-tight"
                      >
                        {sub}
                      </h3>
                    ))
                  ) : (
                    sec.subheading && (
                      <h3 className="text-lg text-[#457b9d] mb-2 font-[MaxOT] tracking-tight">
                        {sec.subheading}
                      </h3>
                    )
                  )}

                  {Array.isArray(sec.content) ? (
                    sec.content.map((para, i) => (
                      <p
                        key={`para-${i}`}
                        className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-[Roboto] mb-2"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    sec.content && (
                      <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-[Roboto]">
                        {sec.content}
                      </p>
                    )
                  )}
                </div>
              );
            }

            // Fallback for unknown types
            return null;
          })}
      </div>
    </div>
  );
};

export default BlogDetails;
