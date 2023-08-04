export const cleanForm=(setInputsForm, setSelectedGenres)=>{
    setInputsForm({
        name: '',
        description: '',
        background_image: '',
        released: '',
        rating: '',
        platforms: '',
      });
      setSelectedGenres([]);
};