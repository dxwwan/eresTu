export interface PanelItemProps {
  image: string;
  description: string;
  imgClassName?: string;
}

export const PanelItem = ({ image, description, imgClassName }: PanelItemProps) => {
  return (
    <>
      <div className="">
        <img src={image} alt={description} className={imgClassName} />
      </div>
    </>
  );
};
