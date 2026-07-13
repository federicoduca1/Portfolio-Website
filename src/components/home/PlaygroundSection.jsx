import CarouselPreview from './CarouselPreview.jsx';
import SectionIntro from './SectionIntro.jsx';

export default function PlaygroundSection({ content }) {
  return (
    <section
      aria-labelledby="playground-preview"
      className="py-4"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.4fr)] lg:items-start lg:gap-16">
        <SectionIntro
          id="playground-preview"
          title={content.title}
          description={content.description}
        />
        <CarouselPreview experiments={content.experiments} />
      </div>
    </section>
  );
}
