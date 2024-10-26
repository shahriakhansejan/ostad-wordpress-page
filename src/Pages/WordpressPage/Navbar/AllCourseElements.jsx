

const AllCourseElements = props => {
    return (
        <div className="">
            <h1 className='text-xl font-bold'>আমাদের কোর্সসমূহ ---</h1>

            <div className='mt-3'>
                <h3 className='text-lg font-semibold'>১. ফ্রন্টএন্ড ডেভেলপমেন্ট</h3>
                <p className='font-medium'>- এই কোর্সে আপনি শিখবেন HTML, CSS, এবং JavaScript</p>
                <p className='font-medium'>- সময়কাল: ৩ মাস</p>
            </div>
            <div className='mt-3'>
                <h3 className='text-lg font-semibold'>২. ব্যাকএন্ড ডেভেলপমেন্ট</h3>
                <p className='font-medium'>- এই কোর্সে আপনি শিখবেন Node.js, Express.js, এবং MongoDB।</p>
                <p className='font-medium'>- সময়কাল: ৪ মাস</p>
            </div>
            <div className='mt-3'>
                <h3 className='text-lg font-semibold'>৩. ডিজিটাল মার্কেটিং</h3>
                <p className='font-medium'>- এই কোর্সে শিখবেন SEO, সোশ্যাল মিডিয়া মার্কেটিং, এবং কনটেন্ট ক্রিয়েশন।</p>
                <p className='font-medium'>- সময়কাল: ২ মাস</p>
            </div>
        </div>
    );
};

export default AllCourseElements;