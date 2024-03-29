import './Pages.css'
import { ArrowLeft2 } from 'iconsax-react';
import { ArrowRight2 } from 'iconsax-react';

function Pages({ children, handleNextPage, handlePreviousPage, currentPage, totalPages }) {
    return (
        <div className='pages__box'>
            <div className='pages__btn'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                >
                    <ArrowLeft2
                        size="32"
                        color="#424f46"
                        variant="Bold"
                        className='arrow'
                    />
                </button>
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    <ArrowRight2
                        size="32"
                        color="#424f46"
                        variant="Bold"
                    />
                </button>
            </div>

            <div className="Pages box" >
                {children}
            </div>

            <div className='pages__btn'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                >
                    <ArrowLeft2
                        size="32"
                        color="#424f46"
                        variant="Bold"
                    />
                </button>
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    <ArrowRight2
                        size="32"
                        color="#424f46"
                        variant="Bold"
                    />
                </button>
            </div>
        </div>
    )
};

export { Pages };
