import React, { useState, useEffect, useRef } from 'react';

// Child component with static text
const TextContent = () => {
  return (
    <div>
      <p className='text-green-600'># Rust</p>
      <br />
      <p className='text-green-600'>## Опыт</p>
      <br />
      <p>Хотя я не считаю себя экспертом в Rust, не могу не поделиться своим опытом с этим языком. Я использую Rust для задач, где критически важна скорость. В некоторых случаях проще решить проблему с помощью Python, но, например, если требуется реализовать алгоритм для обработки больших массивов данных, гораздо эффективнее написать скрипт на Rust. Этот язык позволяет "делегировать" задачи, когда нужна высокая производительность и стабильность. Однако для меня есть и более приоритетные применения!</p>
      <br />
      <p className='text-green-600'>## Bevy</p>
      <br />
      <p>Мое знакомство с Rust началось с желания создавать игры. На данный момент сообществу Rust, особенно в контексте Bevy, не хватает масштабности, что сказывается на доступной документации. Тем не менее, мне очень интересно изучать эту область. Вы можете узнать больше о моем проекте в этой сфере здесь.</p>
      <br />
      <p className='text-green-600'>## Rocket | Tokio</p>
      <br />
      <p>Для разработки API, необходимых в моей работе, я использовал Rocket и Tokio для реализации асинхронности. Хотя я еще не достиг значительного мастерства в этих инструментах, для их использования не требуется глубокое понимание всех нюансов.</p>
    </div>
  );
};

// Main component that calculates and displays line numbers
const RustInfoComponent = () => {
  const textRef = useRef(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const calculateLines = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        const height = element.offsetHeight;
        const newLineCount = Math.round(height / lineHeight);

        // Ensure that the line count is always updated
        if (newLineCount !== lineCount) {
          setLineCount(newLineCount);
        }
      }
    };

    // Use ResizeObserver to observe changes in the text container's size
    const observer = new ResizeObserver(() => {
      calculateLines();
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [lineCount]); // Add lineCount as a dependency to ensure recalculation

  // Create an array of line numbers from 1 to lineCount
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="p-4 w-full">
      <div className="flex">
        {/* Line numbers column */}
        <div className="text-right pr-4 text-gray-500">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber} className="leading-[175%]">
              {lineNumber}
            </div>
          ))}
        </div>

        {/* Text column */}
        <div ref={textRef} className="text-lg font-mono">
          <TextContent />
        </div>
      </div>

      <div className="mt-2 text-sm text-green-600">
        Estimated number of lines: {lineCount}
      </div>
    </div>
  );
};

export default RustInfoComponent;
