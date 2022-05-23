import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },

}

export type FeedbackType = keyof typeof feedbackTypes

// Object.entries(feedbackTypes) =>
/**  
 * [
 *  ['BUG', {...}],
 *  ['IDEIA', {...}],
 *  ['THOUGHT', {...}],
 * ]
 * 
 */


export function WidgetForm () {
    const [feedbackType, setFedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFedbackSent] = useState(false)
    
    function handleRestartFeedback() {
        setFedbackSent(false);
        setFedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 ralative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
              
             { feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>) : (
                <>
                 {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFedbackType} />
              ) : (
                <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequested = {handleRestartFeedback}
                onFeedbackSent={() => setFedbackSent(true)}

                />
              )}
                </>
             )}
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="https://github.com/gabrielzfr" className="underline underline-offset-2 hover:no-underline"
                target='_blank'>Gabriel Fr</a> na NLW da <a href="https://rocketseat.com.br" target={"_blank"} className="underline underline-offset-2" >Rocketseat</a>
            </footer>
        </div>
    );
}